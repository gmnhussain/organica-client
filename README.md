# Organica Client

## **How to Use This Project**

### 1. **Environment Requirements**

Ensure the following versions are installed on your system:

- **Node.js**: v22.13.1
- **npm**: v10.9.2

### 2. **Install Dependencies**

You can install the dependencies using either `npm` or `yarn`. Choose one of the following:

- Using **npm** (recommended):

  ```bash
  npm install
  ```

- Or using **yarn**:

  ```bash
  yarn install
  ```

### 3. **Run the Development Server:**

- Using **npm** (recommended):

  ```bash
  npm run dev
  ```

- Or using **yarn**:

  ```bash
  yarn dev
  ```

### 4. **Build for Production:**

- ```bash
  npm run build
  ```

# Deployment Instructions on cPanel

This guide outlines the steps to deploy this application on cPanel using a custom `server.js` file.

---

## 1. Create a Custom Server File

Create a `server.js` file in the root directory with the following content:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/a') {
        await app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
```

---

## 2. Update Scripts in `package.json`

Update the `scripts` section in `package.json` file to include the following:

```json
"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "NODE_ENV=production node server.js"
}
```

---

## 3. Build the Project

Run the following command to build the project:

```bash
npm run build
```

This will generate the production build of the application in the `.next` directory.

---

## 4. Prepare for Deployment

1. **Zip the Production Build**
   - Exclude the `node_modules` and `.git` directory from the zip file to reduce the upload size.
   - Include all other necessary files, such as `.next`, `package.json`, and `server.js`.

2. **Upload to cPanel File Manager**
   - Navigate to your cPanel File Manager.
   - Upload the zip file to the desired directory on your server.
   - Extract the zip file contents.

---

## 5. Set Up a Node.js Application in cPanel

1. Navigate to the Node.js App section in cPanel.
2. Create a new Node.js application:
   - Specify the Node.js version
   - Set the mode to production
   - Specify the application root where you uploaded the extracted files.
   - Set the application URL.
   - Click Create.
3. Stop the app, then install dependencies by running:
   ```bash
   npm install
   ```
4. Start the application

---

## Notes

- Ensure your `.env` file is properly configured if you are using environment variables.

---
