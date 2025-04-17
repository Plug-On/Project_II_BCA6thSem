<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //This method will return all product
    public function index()
    {
        $products = Product::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => '200',
            'data' => $products,
        ],200);
    }

    //This method will store a new product
    public function store(Request $request)
    {
        //validate the request
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'price' => 'required|numeric',
            'category' => 'required|integer',
            'sku' => 'required|unique:products,sku',
            'is_featured' => 'required',
            'status' => 'required',
        ]);

        //check if validation fails
        if($validator->fails()){
            return response()->json([
                'status' => '400',
                'message' => $validator->errors()
            ],400);
        }
        //store the product
        $product = new Product();
        $product->title = $request->title;
        $product->price = $request->price;
        $product->compare_price = $request->compare_price;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;
        $product->sku = $request->sku;
        $product->qty = $request->qty;
        $product->description = $request->description;
        $product->short_description = $request->short_description;
        $product->status = $request->status;
        $product->is_featured = $request->is_featured;
        $product->barcode = $request->barcode;
        $product->save();

        //return response
        return response()->json([
            'status' => '200',
            'message' => 'Product created successfully',
        ],200);
    }


     //This method will return single product
     public function show()
     {

     }

     //This method will update product
     public function update()
     {

     }


     //This method will delete a product
     public function destroy()
     {

     }
}
