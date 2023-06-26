<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class BlogControlleur extends Controller
{
    //
    public function index() {
        return Inertia::render('Views/Home/Acceuil', [
            'posts' => Post::with('comments', 'user')->get(),
            'tags' => Post::pluck('tag'),
            'popularPosts' => Post::withCount('comments')->orderBy('comments_count', 'desc')->take(4)->get()
        ]);
    }

    public function show($id) {
        // Session::flash('success', "Blog retourné avec succès");
        $post = Post::with('user')->findOrFail($id);
        return Inertia::render('Views/SinglePost/Page', [
            'post' =>  $post,
            'user' => $post->user,
            'comments' => Comment::where('post_id', $id)->with('user')->get(),
            'tags' => Post::pluck('tag'),
            'popularPosts' => Post::withCount('comments')->orderBy('comments_count', 'desc')->take(4)->get()
        ]);
    }

    public function create() {
        return Inertia::render('Views/SinglePost/AddPost');
    }
}
