echo "Running shell script!"
npm run build
cd build
touch _redirects
echo "/*    /index.html   200" > _redirects
npm start