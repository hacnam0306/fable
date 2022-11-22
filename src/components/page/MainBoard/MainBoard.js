import Collection from '../../common/Collection/Collection';
import Review from '../../common/Review/Review';
import Video from '../../common/Video/Video';
import Products from '.././Products/Products';
import Feature from '../../common/Feature/Feature';
import Header from '.././Header/Header'
const MainBoard = () => {
  return <div>
          <Header />
          <Products/>
          <Feature/>
          <Collection/>
          <Video/>
          <Review/>
  </div>;
};

export default MainBoard;
