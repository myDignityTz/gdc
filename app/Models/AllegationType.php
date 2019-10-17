<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AllegationType extends Model
{
    protected $guarded = [];

    public function categories() 
    {
        return $this->hasMany(AllegationCategory::class, "type_id");
    }
}
