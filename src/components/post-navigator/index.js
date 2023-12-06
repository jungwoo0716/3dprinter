import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import './style.scss';

function PostNavigator({ prevPost, nextPost }) {
    // 광고 스크립트를 동적으로 추가하는 useEffect 훅
    useEffect(() => {
      // 광고 스크립트가 이미 페이지에 삽입되어 있는지 확인
      const existingScript = document.querySelector(`script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`);
      
      if (!existingScript) {
        // 광고 스크립트가 없으면 새로 추가
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }
  
      // 광고 초기화
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }, []);
    
  return (
    <>
    <div className="post-navigator">      
      <div className="post-navigator-card-wrapper">
        {nextPost && (
          <Link className="post-card prev" key={nextPost.id} to={nextPost.slug}>
            <div className="direction">이전 글</div>
            <div className="title">{nextPost.title}</div>
          </Link>
        )}
      </div>
      <div className="post-navigator-card-wrapper">
        {prevPost && (
          <Link className="post-card next" key={prevPost.id} to={prevPost.slug}>
            <div className="direction">다음 글</div>
            <div className="title">{prevPost.title}</div>
          </Link>
        )}
      </div>     
    </div>
    <ins className="adsbygoogle"
    style={{ display: 'block' }}
    data-ad-format="autorelaxed"
    data-ad-client="ca-pub-1067668052326016"
    data-ad-slot="8256651582"></ins>
    </>
  );
}

export default PostNavigator;
