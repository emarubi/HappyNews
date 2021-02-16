// Script d'import autonome vers notre base de données
// Pour le lancer il faut utiliser "npm run import"

require('dotenv').config();
const { Client } = require('pg');

const activities = require('../data/activities.json');
const users = require('../data/users.json');
const articles = require('../data/articles.json');

// Instant Invoke function execution
// Cela nous pemettra d'utiliser await directement dans notre fichier
(async () => {
    const client = new Client({
        connectionString: process.env.PG_URL,
    });
    await client.connect();

    // Pour pouvoir refaire tourner mon script sans risque de doublon ou
    // d'erreur sur des "UNIQUE" il vaut "vider" mes table avec de le faire tourner
    // TRUNCATE TABLE vide les tables données
    // et RESTART IDENTITY réinitialise les id à 1
    await client.query('TRUNCATE TABLE "acitivity", "user", "article" RESTART IDENTITY');

    for (let activity of activities) {
        await client.query(
            `INSERT INTO "activity"(activity_name)
                        VALUES ($1)`,
            [
                activity.activity_name,
            ]);

            console.log(`activity "${activity.activity_name}" inserted`);
    }

    for (let user of users) {
        await client.query(
            `INSERT INTO "user"(id, first_name, last_name, email, password, adress, zip_code, city, latitude, longitude, shop_name, registration_number, role_id, content, activity_id)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
            [
                user.id,
                user.first_name,
                user.last_name,
                user.email,
                user.password,
                user.adress,
                user.zip_code,
                user.city,
                user.latitude,
                user.longitude,
                user.shop_name,
                user.registration_number,
                user.role_id,
                user.content,
                user.activity_id,
            ]);

            console.log(`user "${user.id}" inserted`);
    }

    for (let article of articles) {
        // Avec le mot clé RETURNING je vais pouvoir récupérer l'id de la ligne enregistré
        const result = await client.query(
            `INSERT INTO "article"(article_title, description, picture_url, price, is_news, news_duration, activity_id, user_id)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
            [
                article.article_title,
                article.description,
                article.picture_url,
                article.price,
                article.is_news,
                article.news_duration,
                article.activity_id,
                article.user_id,
            ]);
        // Je peux stocker cet id "en face" du user de article pour le retrouver plus facilement
        articleIdMap[article.user] = result.rows[0].id;
        console.log(`article "${article.user}" inserted`);
    }

    console.log('article id map :', articleIdMap);

    await client.end();
})();