const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Starting deployment process...");

try {
  // Build the project
  console.log("📦 Building project...");
  execSync("pnpm run build", { stdio: "inherit" });

  // Export the project
  console.log("📤 Exporting project...");
  execSync("pnpm run export", { stdio: "inherit" });

  // Create a .nojekyll file to prevent GitHub Pages from processing the site with Jekyll
  console.log("📝 Creating .nojekyll file...");
  fs.writeFileSync(path.join(process.cwd(), "out", ".nojekyll"), "");

  console.log("✅ Deployment files are ready!");
  console.log("\nNext steps:");
  console.log("1. Commit and push the changes to your repository");
  console.log("2. The GitHub Action will automatically deploy to GitHub Pages");
  console.log(
    `3. Your site will be available at: https://[your-username].github.io/sachith-portfolio/`
  );
} catch (error) {
  console.error("❌ Deployment failed:", error.message);
  process.exit(1);
}
