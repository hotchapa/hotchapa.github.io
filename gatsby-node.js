const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

const createBlogPages = ({ createPage, results }) => {
  const blogPostTemplate = require.resolve(`./src/templates/blog-template.js`);
  results.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        nextSlug: next?.fields.slug ?? '',
        prevSlug: previous?.fields.slug ?? '',
      },
    });
  });
};

const createPostsPages = ({ createPage, results }) => {
  const categoryTemplate = require.resolve(`./src/templates/category-template.js`);
  const categorySet = new Set(['All']);
  const { edges } = results.data.allMarkdownRemark;
  edges.forEach(({ node }) => {
    const postCategories = node.frontmatter.categories.split(' ');
    postCategories.forEach((category) => categorySet.add(category));
  });

  const categories = [...categorySet];

  createPage({
    path: `/posts`,
    component: categoryTemplate,
    context: {
      currentCategory: 'All',
      edges,
      categories,
    },
  });

  categories.forEach(currentCategory => {
    const categoryEdges = edges.filter(({ node }) => node.frontmatter.categories.includes(currentCategory));
    createPage({
      path: `/posts/${currentCategory}`,
      component: categoryTemplate,
      context: {
        currentCategory,
        categories,
        edges
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            excerpt(pruneLength: 500, truncate: true)
            fields {
              slug
            }
            frontmatter {
              categories
              title
              date(formatString: "MMMM DD, YYYY")
              emoji
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createBlogPages({ createPage, results });
  createPostsPages({ createPage, results });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      language: String
      siteUrl: String
      ogImage: String
      comments: Comments
      ga: String
      author: Author
      about: About
    }

    type Comments {
      utterances: Utterances
    }

    type Utterances {
      repo: String
    }

    type Author {
      name: String
      bio: AuthorBio
      social: AuthorSocial
    }

    type AuthorBio {
      role: String
      description: [String]
      thumbnail: String
    }

    type AuthorSocial {
      github: String
      linkedIn: String
      email: String
    }

    type About {
      timestamps: [Timestamp]
      projects: [Project]
    }

    type Timestamp {
      date: String
      activity: String
      links: Links
    }

    type Project {
      title: String
      description: String
      techStack: [String]
      thumbnailUrl: String
      links: Links
    }

    type Links {
      github: String
      post: String
      googlePlay: String
      appStore: String
      demo: String
    }
  `);
};
