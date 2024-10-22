<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## Shorty URL

Project Shorten URL create with Laravel 11

## Installation

```sh
git clone https://github.com/Weerapat1993/shorty-url.git
cd shorty-url
composer install
cp .env.example .env
php artisan key:generate
# set mysql db
php artisan migrate --seed
npm install
npm run build
php artisan serve
```

## ER Diagrams

![ER Diagram](./er_diagram.png)
