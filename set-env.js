const fs = require('fs');
const path = require('path');

require('dotenv').config();

const targetPath = path.join(__dirname, './src/environments/environment.ts');
const prodTargetPath = path.join(__dirname, './src/environments/environment.development.ts');

const generateEnvFileContent = (isProduction) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || '',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.FIREBASE_APP_ID || '',
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || '',
  };

  return `
export const environment = {
  production: ${isProduction},
  firebase: ${JSON.stringify(firebaseConfig, null, 2)}
};
  `;
};

const devFileContent = generateEnvFileContent(false);
const prodFileContent = generateEnvFileContent(true);

try {
  fs.writeFileSync(targetPath, devFileContent.trim());
  fs.writeFileSync(prodTargetPath, prodFileContent.trim());
  console.log(`✅ Angular environment files generated successfully.`);
  console.log(`   -> ${targetPath}`);
  console.log(`   -> ${prodTargetPath}`);
} catch (error) {
  console.error(`❌ Error generating environment files:`, error);
  process.exit(1);
}
