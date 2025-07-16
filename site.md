┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                 Setting Up GitHub Pages for www.aibeyondborders.org                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

This guide explains how to set up a GitHub Pages site for the aibeyondborders organization and host it at
www.aibeyondborders.org.

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                          1. Create a Repository for Your Site

 1 Go to your organization’s GitHub page: https://github.com/aibeyondborders
 2 Click New to create a new repository.
 3 Name the repository aibeyondborders.github.io (this is required for organization-wide GitHub Pages).
 4 (Optional) Add a README.md and .gitignore file.
 5 Click Create repository.

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                              2. Add Your Website Content

 1 Clone the repository to your local machine:

    git clone https://github.com/aibeyondborders/aibeyondborders.github.io.git

 2 Add your website files (e.g., index.html, images, CSS, etc.).
 3 Commit and push your changes:

    git add .
    git commit -m "Initial website content"
    git push


────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                                 3. Enable GitHub Pages

 1 Go to the repository’s Settings > Pages.
 2 Under Source, select the branch (usually main) and root (/) folder.
 3 Click Save.
 4 Your site will be published at https://aibeyondborders.github.io

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                   4. Set Up Custom Domain (www.aibeyondborders.org)

 1 In the Pages settings, find the Custom domain section.
 2 Enter www.aibeyondborders.org and click Save.
 3 GitHub will show DNS records you need to add.

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                                    5. Configure DNS

 1 Log in to your domain registrar (where you bought aibeyondborders.org).
 2 Add the following DNS records:
    • CNAME record:
       • Name: www
       • Value: aibeyondborders.github.io
    • A records (optional, for apex domain aibeyondborders.org):
       • Name: @
       • Value: 185.199.108.153
       • Value: 185.199.109.153
       • Value: 185.199.110.153
       • Value: 185.199.111.153
 3 (Optional) Add a CNAME record for the apex domain:
    • Name: @
    • Value: aibeyondborders.github.io
 4 Wait for DNS changes to propagate (can take up to 24 hours).

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                                    6. Enforce HTTPS

 • In the GitHub Pages settings, check Enforce HTTPS once it’s available.

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                                                        7. Done!

 • Your site should now be live at www.aibeyondborders.org.
 • Update your site by pushing changes to the aibeyondborders.github.io repository.
