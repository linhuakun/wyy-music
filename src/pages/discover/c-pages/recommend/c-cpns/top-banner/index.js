import React, { memo, useEffect,useRef,useState,useCallback } from "react";

import { getTopBannerAction } from "../../store/actionCreators";

import { useSelector, useDispatch, shallowEqual} from "react-redux";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl} from "./style";

import { Carousel} from "antd";

export default memo(function HYTopBanner() {
    //state
    const [currentIndex,setcurrentIndex] = useState(0);
    //组件和redux关联：获取数据和进行操作
    const { topBanners } = useSelector(
    (state) => ({
      // topBanners:state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const bannerRef=useRef()
  //获取dispatch //发送请求
  const dispatch = useDispatch();

  //其他hooks
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from,to)=>{
    setcurrentIndex(to) 
  },[])
  //其他业务
  const bgImage = topBanners[currentIndex]&&(topBanners[currentIndex].imageUrl+"?imageView&blur=40x20")


  return (
    <BannerWrapper bgImage={bgImage} >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={bannerChange} className="icon">
              {
                  topBanners.map((item,index)=>{
                      return (
                          <div className="banner-item" key={item.imageUrl}>
                              <img  className="image" src={item.imageUrl} alt={item.typeTitle}/>
                          </div>
                      )
                  })
              }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
            <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
