# Steps To Deploy GDC Project

Reference Material
- [Nginx] https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-lemp-on-ubuntu-18-04#step-5-%E2%80%94-setting-up-nginx
- [PHP] https://www.rosehosting.com/blog/how-to-install-php-7-3-on-ubuntu-16-04/

##### Update OS
`apt update && apt upgrade`

##### Install Nginx
`apt install nginx`

##### Create virtual host at sites-available
`sudo nano /etc/nginx/sites-available/gdc` The copy content form nginx.stub file and paste

##### Activate the new virtual host configuration file, create a symbolic link to 
`sudo ln -s /etc/nginx/sites-available/gdc /etc/nginx/sites-enabled/`

##### To confirm that the configuration doesn’t contain any syntax errors, you can use:
`sudo nginx -t`

##### To apply the changes, reload Nginx with:
`sudo systemctl reload nginx`

##### Install PHP
- `LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php`
- `apt install php7.3 php7.3-cli php7.3-common`
- `apt install php7.3-bcmath php7.3-curl php7.3-fpm php7.3-gd php7.3-mbstring php7.3-xml php7.3-zip php7.3-mysql`

##### Install GIT
`apt install git`

Install Composer
`apt install composer`

##### Install Mysql
`apt install mysql`

#### Login into the database
`mysql -uroot -p` then press enter, the system will ask for password press enter without type anything

#### Create database
`create database gdc;`

##### Clone project from github
- `cd /var/www`
- `git clone https://github.com/myDignityTz/gdc.git gdc`
- `cd /var/www/gdc`

##### Install Project Dependencies
- `cd /var/www/gdc`
- `composer install`

##### Setup configuration:
- `cd /var/www/gdc`
- `cp .env.example .env`
- `sudo nano .env` Then change database to gdc

##### Give Permission
- `sudo chown -R www-data.www-data /var/www/gdc/storage`
- `sudo chown -R www-data.www-data /var/www/dgc/bootstrap/cache`

##### Migrate and Seed the database
- `cd /var/www/gdc`
- `php artisan migrate:refresh --seed`
