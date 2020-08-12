### 1. https://underscores.me
- remember to set the theme name

### 2. Project Root
- ​git init​ @ root
- add root .gitignore

``` .gitignore
# Numerous always-ignore extensions
*.diff
*.err
*.orig
*.log
*.rej
*.swo
*.swp
*.vi
*~
*.sass-cache
node_modules/
.tmp/

# OS or Editor folders
.DS_Store
Thumbs.db
.cache
.project
.settings
.tmproj
*.esproj
nbproject
*.sublime-project
*.sublime-workspace
*.komodoproject
.komodotools
_notes
dwsync.xml

app/public/local.php
app/public/wp-config.php
app/public/wp-content/advanced-cache.php
app/public/wp-content/ai1wm-backups/
app/public/wp-content/backup-db/
app/public/wp-content/backups/
app/public/wp-content/blogs.dir/
app/public/wp-content/cache/
app/public/wp-content/upgrade/
app/public/wp-content/wp-cache-config.php
app/public/wp-content/plugins/hello.php
app/public/.user.ini

/.htaccess
/license.txt
/readme.html
/sitemap.xml
/sitemap.xml.gz
```

### 3. wp-super-starter
- add period to gitignore
- run ​npm install
- change publicPath on line 93
- change functions.php - scripts
    + change the version (top)
    + set the server name
    + change the resource paths…
``` php
function interzone_scripts() {
	wp_enqueue_style( "interzone-google-fonts", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" );

	if (strstr($_SERVER["SERVER_NAME"], "interzone.local")) {
		wp_enqueue_script("interzone-scripts", "http://localhost:3000/bundled.js", NULL, "1.0", true);
	}
	else {
    wp_enqueue_script("interzone-vendors-js", get_theme_file_uri("/bundled-assets/vendors~scripts.920bf068e75aa8ef387f.js"), NULL, INTERZONE_VERSION, true);
    wp_enqueue_script("interzone-scripts-js", get_theme_file_uri("/bundled-assets/scripts.1fbc480a93cb7e892a8d.js"), NULL, INTERZONE_VERSION, true);
    wp_enqueue_style("politik-styles", get_theme_file_uri("/bundled-assets/styles.1fbc480a93cb7e892a8d.css"));
	}
}
add_action( 'wp_enqueue_scripts', 'interzone_scripts' );
```