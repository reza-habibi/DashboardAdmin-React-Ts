import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import { productData } from "../../demoData";
import "./SingleProduct.Style.css";
import { Publish } from "@material-ui/icons";
export default function SingleProduct() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="sales"
            title="Sales Performance "
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AJ24QM/c94fb0daa13442d5a193a96af3bdc8df.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple AirPods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">yes</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in Stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="name"> Product Name </label>
            <input type="text" id="name" placeholder="Apple AirPod" />
            <label htmlFor="stock">In Stock</label>
            <select name="stock" id="stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AJ24QM/c94fb0daa13442d5a193a96af3bdc8df.jpg"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file"> <Publish/> </label>
              <input type="file" name="file" id="file" style={{display:'none'}} />
            </div>
            <button className="productButton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
