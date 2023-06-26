<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render('Views/SinglePost/Page');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Views/SinglePost/AddPost');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->input();
        $request->validate([
            'title' => 'required|string|min:3',
            'content' => 'required|string|min:10',
            'tag' => 'required',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:4096'
        ]);

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageName = uniqid('postImg') . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/externalAsset/postImages'), $imageName);
        }

        $store = Post::create([
            'user_id' => auth()->id(),
            'title' => $data['title'],
            'content' => $data['content'],
            'tag' => $data['tag'],
            'img' => $imageName,    
        ]);

        return Redirect::route('home')->with('success', "Post ajouté avec succès");
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post, $id)
    {
        //
        $post = Post::findOrFail($post->id);
        // dd($id);
        return Inertia::render('');
        // return Redirect::route('');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
