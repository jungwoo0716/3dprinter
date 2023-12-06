import React from 'react';
import './style.scss';


function PostContent({ html }) {

  return (
    <div className="post-content">    
      {/* Google AdSense 광고 슬롯 */}
      <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1067668052326016"
            data-ad-slot="7030651089"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;
