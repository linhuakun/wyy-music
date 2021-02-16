import React, { memo} from 'react';


import HYTopBanner from './c-cpns/top-banner';
import  HYHotRecommend  from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/recommend-ranking'
import HYUSerLogin from './c-cpns/user-login'
import HYSettleSinger from './c-cpns/settle-singer'
import HYHotAnchor from './c-cpns/hot-anchor'


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

function HYRecommend(props) {
  return (
    <RecommendWrapper>
        <HYTopBanner />
        <Content className="wrap-v2">
          <RecommendLeft>
            <HYHotRecommend/>
            <HYNewAlbum/>
            <HYRecommendRanking/>
          </RecommendLeft>

          <RecommendRight>
            <HYUSerLogin/>
            <HYSettleSinger/>
            <HYHotAnchor/>
          </RecommendRight>
        </Content>
    </RecommendWrapper>
  )
}

// const mapStateToProps = state =>({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch=>({
//   getBnaners:()=>{
//     dispatch(getTopBannerAction())
//   }
// })

export default memo(HYRecommend)
