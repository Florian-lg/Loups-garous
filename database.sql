CREATE TABLE IF NOT EXISTS Game (
    id int  NOT NULL ,
    state boolean  NOT NULL ,
    nb_players int  NOT NULL ,
    PRIMARY KEY (
        id
    )
);

CREATE TABLE IF NOT EXISTS Roles (
    id int  NOT NULL ,
    label string  NOT NULL ,
    PRIMARY KEY (
        id
    )
);

CREATE TABLE IF NOT EXISTS Player (
    id int  NOT NULL ,
    discord_id int  NOT NULL ,
    nb_roles int  NOT NULL ,
    PRIMARY KEY (
        id
    ) 
);

CREATE TABLE IF NOT EXISTS Game_state (
    id int  NOT NULL ,
    id_player int  NOT NULL ,
    id_role int  NOT NULL ,
    id_game int  NOT NULL ,
    is_dead boolean  NOT NULL ,
    PRIMARY KEY (
        id
    )
);

CREATE TABLE IF NOT EXISTS Voice (
    id int  NOT NULL ,
    id_game int  NOT NULL ,
    PRIMARY KEY (
        id
    )
);

CREATE TABLE IF NOT EXISTS Textual (
    id int  NOT NULL ,
    id_game int  NOT NULL ,
    label string  NOT NULL ,
    is_loupsgarous boolean  NOT NULL ,
    PRIMARY KEY (
        id
    )
);

ALTER TABLE Game ADD CONSTRAINT fk_Game_id FOREIGN KEY(id)
REFERENCES Game_state (id_game);

ALTER TABLE Roles ADD CONSTRAINT fk_Roles_id FOREIGN KEY(id)
REFERENCES Game_state (id_role);

ALTER TABLE Player ADD CONSTRAINT fk_Player_id FOREIGN KEY(id)
REFERENCES Game_state (id_player);

ALTER TABLE Voice ADD CONSTRAINT fk_Voice_id_game FOREIGN KEY(id_game)
REFERENCES Game (id);

ALTER TABLE Textual ADD CONSTRAINT fk_Textual_id_game FOREIGN KEY(id_game)
REFERENCES Game (id);

