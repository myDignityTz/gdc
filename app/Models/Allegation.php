<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Allegation extends Model implements HasMedia
{
    use HasMediaTrait;
    
    protected $guarded  = [];

    protected $with     = [
        "victim", 
        "suspect", 
        "type", 
        "category", 
        "reporter",
        "environment",
    ];

    protected $appends  = [
        "reporter_name", 
        "environment_category"
    ];

    public function victim() 
    {
        return $this->belongsTo(Victim::class);
    }

    public function type() 
    {
        return $this->belongsTo(AllegationType::class);
    }

    public function category() 
    {
        return $this->belongsTo(AllegationCategory::class);
    }

    public function reporter() 
    {
        return $this->belongsTo(Reporter::class);
    }

    public function environment()
    {
        return $this->morphTo();
    }

    public function suspect() 
    {
        return $this->belongsTo(Suspect::class);
    }

    public function stakeholders() 
    {
        return $this->belongsToMany(Stakeholder::class)
            ->withTimestamps()
            ->withPivot(['status',]);
    }

    public function getReporterNameAttribute() 
    {
        if(!$this->reporter) {
            return "Unknown";
        }

        return optional($this->reporter->category)->name;
    }

    public function getEnvironmentCategoryAttribute() 
    {
        return $this->environment;
    }
}
