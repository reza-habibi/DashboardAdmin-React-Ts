import "./NewProduct.Style.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label htmlFor="file">Image</label>
          <input type="file" id="stock" placeholder="Upload Your Image" />
        </div>

        <div className="newProductItem">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Apple AirPod" />
        </div>

        <div className="newProductItem">
          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" placeholder="123" />
        </div>

        <div className="newProductItem">
          <label htmlFor="active">Active</label>
          <select name="active" id="active" className="newProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
}
