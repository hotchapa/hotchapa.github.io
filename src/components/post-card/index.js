// import { Link } from 'gatsby';
// import React from 'react';
// import './style.scss';

// function PostCard({ post }) {
//   const { id, slug, title, excerpt, date, categories, emoji} = post;
//   return (
//     <div className="post-card-wrapper">
//       <Link className="post-card" key={id} to={slug}>
//         <div className="emoji">{emoji}</div>
//         <div className="title">{title}</div>
//         <div className="date">{date}</div>
//         {/* <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
//         <div className="info"> */}
//           {/* <div className="date">{date}</div> */}
//           {/* <div className="categories">
//             {categories.map((category) => (
//               <Link className="category" key={category} to={`/posts/${category}`}>
//                 {category}
//               </Link>
//             ))}
//           </div> */}
//         {/* </div> */}
//       </Link>
//     </div>
//   );
// }

// export default PostCard;
import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories, emoji} = post;
  return (
    <div className="post-card-wrapper">
      <Link className="post-card" key={id} to={slug}>
          <div className="emoji">{emoji}</div>
          <div className="content">
            <div className="title">{title}</div>
            <div className="date">{date}</div>
          </div>
      </Link>
    </div>
  );
}

export default PostCard;
