# GreenCart

GreenCart is a grocery shopping application with a React/Vite client and an Express/MongoDB API server.

## Project Structure

- `client/` - React frontend built with Vite and Tailwind CSS
- `server/` - Express API, MongoDB models, authentication, Cloudinary uploads, and Stripe checkout

## Requirements

- Node.js 18 or newer
- MongoDB connection string
- Cloudinary account with image upload permissions
- Stripe account and secret key for online checkout

## Installation

Install dependencies in both applications:

```powershell
cd client
npm install

cd ../server
npm install
```

## Environment Variables

Create `client/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
```

Create `server/.env`:

```env
PORT=4000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SELLER_EMAIL=your_seller_email
SELLER_PASSWORD=your_seller_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Run Locally

Start the API server in one terminal:

```powershell
cd server
npm run server
```

Start the frontend in another terminal:

```powershell
cd client
npm run dev
```

The frontend runs at `http://localhost:5173` and the API runs at `http://localhost:4000` by default.

## Available Scripts

### Client

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

### Server

- `npm start` - Start the API server
- `npm run server` - Start the API server with Nodemon

## Main Features

- User registration and login
- Persistent shopping cart
- Product browsing and categories
- Seller product management
- Address management
- Cash-on-delivery orders
- Stripe checkout
- Cloudinary product image uploads

## Security Notes

- Keep MongoDB, JWT, Cloudinary, Stripe, and seller credentials private.
- Cloudinary API credentials must have permission to upload/create assets.
- Restart the server after changing `server/.env`.
- If an environment file was previously committed, remove it from Git tracking and rotate the exposed credentials.

```powershell
git rm --cached client/.env server/.env
```
