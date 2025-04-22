<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    Public function latestProducts(){
        $products = Product::orderBy('created_at', 'desc')
                    ->where('status', 1)
                    ->limit(8)
                    ->get();
        return response()->json([
            'status' => 200,
            'data' => $products
        ],200);
    }

    Public function featuredproducts(){
        $products = Product::orderBy('created_at', 'desc')
                    ->where('status', 1)
                    ->where('is_featured', 'yes')
                    ->limit(8)
                    ->get();
        return response()->json([
            'status' => 200,
            'data' => $products
        ],200);
    }
}
