<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //this method will return all the categories
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'data' => $categories
        ]);
    }

    //this method will store category in db
    public function store(){

    }

    //this method will return single value category
     public function show(){

    }

    //this method will update single category
    public function update(){

    }

    //this method will destroy single category
    public function destroy(){

    }
}
