-- Creation of the story table
CREATE TABLE IF NOT EXISTS stories (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    character_name VARCHAR(50) NOT NULL,
    place VARCHAR(50) NOT NULL,
    theme VARCHAR(50) NOT NULL,
    story_content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion of a test story (to check that it works at the beginning)
INSERT INTO stories (character_name, place, theme, story_content)
VALUES ('Dragon Test', 'Espace', 'Amitié', 'Il était une fois un dragon spatial...');