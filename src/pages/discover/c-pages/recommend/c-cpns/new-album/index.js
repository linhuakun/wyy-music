import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYAlbumCover from "@/components/album-cover";

import { AlbumWrapper } from "./style";
import { NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PRE_PAGE } from "@/common/constants";
import { getNewAlbumAction } from "../../store/actionCreators";

export default memo(function HYNewAlbum() {
  //state

  //网络请求 hooks
  //获取数据
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  //发送数据
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  //其他hooks

  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums
                    .slice(
                      item * NEW_ALBUM_PRE_PAGE,
                      (item + NEW_ALBUM_PAGE_NUM) * NEW_ALBUM_PRE_PAGE
                    )
                    .map((iten) => {
                      return (
                        <HYAlbumCover
                          info={iten}
                          key={iten.id}
                          size={100}
                          width={118}
                          bgp="-570px"
                        />
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
