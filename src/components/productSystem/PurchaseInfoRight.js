import styled from 'styled-components';
import { ProductInfo, VendorIntro } from '../../components/productSystem';

const PurchaseInfoRightContainer = styled.section`
  margin-left: 100px;
  width: calc(50% + -100px);
`;

export const PurchaseInfoRight = ({
  product,
  products,
  id,
  handler,
  productErrorMessage,
  vendorInfo,
}) => {
  return (
    <PurchaseInfoRightContainer>
      <ProductInfo product={product} />
      <VendorIntro
        products={products}
        id={id}
        vendorInfo={vendorInfo}
        handler={handler}
        productErrorMessage={productErrorMessage}
      />
    </PurchaseInfoRightContainer>
  );
};
