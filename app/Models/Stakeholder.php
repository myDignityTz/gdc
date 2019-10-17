<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stakeholder extends Model
{
    protected $guarded = [];

    public function allegations() 
    {
        return $this->belongsToMany(Allegation::class)
            ->withTimestamps()
            ->withPivot(['status',]);
    }
}
