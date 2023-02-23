module.exports = {
    plugins: [
      
      '@semantic-release/github',
    ],
    
    branches: ['main'],
    repositoryUrl: 'https://github.com/georgekakarlis/careless-utils',
    ci: false,
    githubToken: process.env.GH_TOKEN,
  };
  