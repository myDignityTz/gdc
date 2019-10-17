<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reporter extends Model
{
    public function category()
    {
        return $this->morphTo();
    }
}
