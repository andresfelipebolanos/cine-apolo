PGDMP  /                
    |            Usuarios_db    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16511    Usuarios_db    DATABASE     �   CREATE DATABASE "Usuarios_db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "Usuarios_db";
                postgres    false            �            1259    16538    reservas    TABLE     �   CREATE TABLE public.reservas (
    id integer NOT NULL,
    username character varying(100),
    fecha date,
    pelicula character varying(100),
    silla character varying(2)
);
    DROP TABLE public.reservas;
       public         heap    postgres    false            �            1259    16537    reservas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reservas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.reservas_id_seq;
       public          postgres    false    218            �           0    0    reservas_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.reservas_id_seq OWNED BY public.reservas.id;
          public          postgres    false    217            �            1259    16513    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(60) NOT NULL,
    username character varying(50) NOT NULL,
    telefono integer,
    fecha_nacimiento date
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16512    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            V           2604    16541    reservas id    DEFAULT     j   ALTER TABLE ONLY public.reservas ALTER COLUMN id SET DEFAULT nextval('public.reservas_id_seq'::regclass);
 :   ALTER TABLE public.reservas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            U           2604    16516    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16538    reservas 
   TABLE DATA           H   COPY public.reservas (id, username, fecha, pelicula, silla) FROM stdin;
    public          postgres    false    218   �       �          0    16513    users 
   TABLE DATA           Z   COPY public.users (id, email, password, username, telefono, fecha_nacimiento) FROM stdin;
    public          postgres    false    216   �       �           0    0    reservas_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.reservas_id_seq', 1, true);
          public          postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    215            \           2606    16543    reservas reservas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_pkey;
       public            postgres    false    218            X           2606    16526    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            Z           2606    16518    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �   :   x�3�,N-J���4202�54�5����T���I��WpK,�/�,�W0�t2����� b�[      �   l   x�3�,N-J��w�M���K���T1JT14P	tO�H1O�)+43��-��.��w����3	3�vrҏ�6�0���6/�
-v/��i�F�F��F\1z\\\ 2%     