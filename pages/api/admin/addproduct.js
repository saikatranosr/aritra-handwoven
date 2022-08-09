import Products from "../../../models/Products";
import connectToDb from "../../../middleware/mongoConnect";

const handler = async (req, res) => {
  if (req.method == "POST") {
    delete req.body.product['_id']
      const p = new Products(req.body.product)
      await p.save()
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectToDb(handler);
