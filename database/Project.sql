-- Initialisation et création de la base de données pour le projet en Node.js, sur pgAdmin 4
drop database if exists justmusic;
create database justmusic;

-- Création des tables pour le développement de l'application

/* Les utilisateurs */
create table utilisateur (
    id_user serial,
    email varchar(100) not null,
    pseudo varchar(20) not null,
    mdp varchar(50) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_user),
    unique (email)
);

/* Les commentaires des utilisateurs */
create table commentaire (
    id_commentaire serial,
    titre varchar(50) not null,
    contenu varchar(200) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_commentaire)
);

/* Les tickets SAV pour les questions des utilisateurs */
create table ticket (
    id_ticket serial,
    titre varchar(50) not null,
    contenu varchar(200) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_ticket)
);

/* Les musiques */
create table musique (
    id_musique serial,
    nom varchar(50) not null,
    contenu varchar(200) not null,
    genre varchar(30) not null,
    artiste varchar(20) not null,
    duree interval not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_musique)
);

/* Les podcasts */
create table podcast (
    id_podcast serial,
    nom varchar(50) not null,
    contenu varchar(200) not null,
    genre varchar(30) not null,
    artiste varchar(20) not null,
    duree interval not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_podcast)
);

/* Les albums */
create table album (
    id_album serial,
    nom varchar(50) not null,
    contenu varchar(200) not null,
    genre varchar(30) not null,
    artiste varchar(20) not null,
    duree interval not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_album)
);

/* Les livres audio */
create table livre (
    id_livre serial,
    nom varchar(50) not null,
    contenu varchar(200) not null,
    genre varchar(30) not null,
    artiste varchar(20) not null,
    duree interval not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_livre)
);

/* Les playlists */
create table playlist (
    id_playlist serial,
    nom varchar(50) not null,
    contenu varchar(200) not null,
    artiste varchar(20) not null,
    duree interval not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_playlist)
);

/* Les concerts */
create table concert (
    id_concert serial,
    nom varchar(50) not null,
    contenu varchar(200) not null,
    genre varchar(30) not null,
    artiste varchar(20) not null,
    duree interval not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_concert)
);

/* La bibliothèque */
create table bibliothèque (
    id_bibliotheque serial,
    nom varchar(50),
    contenu varchar(200),
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    primary key (id_bibliotheque)
);