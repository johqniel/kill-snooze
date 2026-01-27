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

## 3. Set Up Storage (Blob)
1. Once deployed, go to your project dashboard on Vercel.
2. Click on the **"Storage"** tab.
3. Click **"Connect Store"** -> **"Create New"** -> **"Blob"**.
4. Accept the terms and click **"Create"**.
5. Select your project and click **"Connect"**.
6. This will automatically add `BLOB_READ_WRITE_TOKEN` to your environment variables.
7. **Important**: Go to the **"Deployments"** tab, click the three dots on the latest deployment, and select **"Redeploy"** to ensure the new environment variables are picked up.

## 4. Done!
Your application is now live and saving data as JSON files.
- Orders will be saved in the `orders/` folder.
- Waitlist signups will be saved in the `waitlist/` folder.
- You can view and download these files in the **"Storage"** tab -> **"Browser"** on Vercel.
