<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Post;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'post_id', 'commentaire'];

     function user() {
        return $this->belongsTo('App\Models\User','user_id');
    }

    protected function post() {
        return $this->belongsTo(Post::class);
    }


    // protected $with = ['user'];
}
