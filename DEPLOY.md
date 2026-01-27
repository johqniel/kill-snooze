# Deploy to Vercel

Follow these steps to deploy your application and set up the database.

## 1. Push to GitHub
1. Create a repository on GitHub.
2. Push your code:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository.
4. Click **"Deploy"**.

## 3. Set Up Storage (Postgres)
1. Once deployed, go to your project dashboard on Vercel.
2. Click on the **"Storage"** tab.
3. Click **"Connect Store"** -> **"Create New"** -> **"Postgres"**.
4. Accept the terms and click **"Create"**.
5. Select your project and click **"Connect"**.
6. This will automatically add the necessary environment variables (`POSTGRES_URL`, etc.) to your deployment.
7. **Important**: Go to the **"Deployments"** tab, click the three dots on the latest deployment, and select **"Redeploy"** to ensure the new environment variables are picked up.

## 4. Initialize Database
1. Once redeployed, open your live website URL.
2. Visit the setup URL to create the tables:
   ```
   https://<your-project>.vercel.app/api/setup-db
   ```
3. You should see `{"message":"Database setup successfully"}`.

## 5. Done!
Your application is now live and connected to the database.
- Orders will be saved to the `orders` table.
- Waitlist signups will be saved to the `waitlist` table.
- You can view the data in the **"Storage"** tab -> **"Browser"** on Vercel.
