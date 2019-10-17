<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AllegationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "type_id" => "required",
            "category_id" => "required",
            "victim" => "required|array",
            "victim.age" => "required",
            "suspect" => "required|array",
            "suspect.description" => "required",
            "suspect.relationship" => "required",
            "environment" => "required",
            "environment_type" => "required",
        ];
    }
}
