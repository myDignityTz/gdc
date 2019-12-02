<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reporter extends Model
{
    protected $guarded = [];

    public function category()
    {
        return $this->morphTo();
    }
}
