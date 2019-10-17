<?php

namespace App;

use App\Models\Reporter;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Silber\Bouncer\Database\HasRolesAndAbilities;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;
    
    use HasRolesAndAbilities;

    protected $guarded  = [];

    protected $hidden   = [
        'password', 
        'remember_token',
    ];

    protected $casts    = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends  = [
        "role"
    ];

    public function reporter()
    {
        return $this->morphOne(Reporter::class, 'category');
    }

    public function getRoleAttribute() 
    {
        return $this->roles()->value("title") ?? "Unknown";
    }
}
