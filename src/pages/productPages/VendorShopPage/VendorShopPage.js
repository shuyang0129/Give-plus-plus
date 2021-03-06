import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE } from '../../../constants/style';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StandardNavPage } from '../../../components/Page';
import useProduct from '../../../hooks/productHooks/useProduct';
import {
  Banner,
  SellerInfo,
  Announcement,
  Products,
} from '../../../components/productSystem';
import {
  setProducts,
  setErrorMessage,
} from '../../../redux/slices/productSlice/productSlice';

const SellerProductTitle = styled.div`
  margin: ${DISTANCE.sm} auto;
  padding-bottom: ${DISTANCE.sm};
  font-size: ${FONT.lg};
  color: ${COLOR.text_2};
  border-bottom: 1px solid ${COLOR.text_2};
`;

const VendorShopPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    loaded,
    onLoad,
    vendorInfo,
    products,
    productErrorMessage,
    handleVendorProductMoreButton,
    handleGetProductsFromVendor,
    handleGetUserById,
  } = useProduct();

  useEffect(() => {
    window.scroll(0, 0);
    handleGetProductsFromVendor(id, 1);
    handleGetUserById(id);
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
    };
  }, [id, dispatch]);

  return (
    <>
      <StandardNavPage>
        <Banner
          banner={vendorInfo.banner_url}
          loaded={loaded}
          onLoad={onLoad}
        />
        <SellerInfo
          vendorInfo={vendorInfo}
          products={products}
          loaded={loaded}
          onLoad={onLoad}
        />
        <Announcement announcement={vendorInfo.announcement} />
        <SellerProductTitle>刊登商品</SellerProductTitle>
        <Products
          products={products}
          id={id}
          handler={handleVendorProductMoreButton}
          productErrorMessage={productErrorMessage}
        />
      </StandardNavPage>
    </>
  );
};

export default VendorShopPage;
