<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Victim extends Model
{
    protected $guarded = [];
    
    public function reporter()
    {
        return $this->morphOne(Reporter::class, 'category');
    }
}
