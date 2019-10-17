<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchoolEnvironment extends Model
{
    protected $guarded  = [];

    protected $with     = ["region", "district"];

    public function allegation()
    {
        return $this->morphOne(Reporter::class, 'environment');
    }

    public function region() 
    {
        return $this->belongsTo(Region::class);
    }

    public function district() 
    {
        return $this->belongsTo(District::class);
    }
}
