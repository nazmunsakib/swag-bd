# swag-bd

## Deploy to FTP hosting

This project builds as a static Next.js export for Apache-compatible shared hosting. GitHub Actions deploys it automatically after every push to `main`; deployments can also be started from the repository's Actions tab.

Add these repository secrets under **Settings > Secrets and variables > Actions**:

- `FTP_SERVER`: FTP hostname or IP address
- `FTP_USERNAME`: hosting FTP username
- `FTP_PASSWORD`: hosting FTP password

Add these Actions variables:

- `FTP_DIR`: domain document root, commonly `/public_html/`; it must end with `/`
- `FTP_PROTOCOL`: `ftps` if supported by the host; defaults to `ftp`
- `FTP_PORT`: FTP/FTPS port; defaults to `21`

The workflow uploads the **contents** of `out/`, including `.htaccess`, into the configured document root. Confirm the exact document root with the hosting provider. The FTP server address is not necessarily the website IP. In the domain's DNS settings, point `swag.bd` to the hosting provider's website IP and configure `www` as directed by the provider. Enable the hosting provider's SSL certificate after DNS points to the new host. Keep the Vercel deployment available until DNS has propagated and the new site has been checked.

Use FTPS rather than plain FTP when available. Rotate any password that has been shared outside GitHub, then save the replacement directly as the `FTP_PASSWORD` repository secret. Never add credentials to this repository.
