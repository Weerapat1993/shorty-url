<?php

namespace App\Http\Requests;

use App\Models\Link;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateLinkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(Request $request): array
    {
        $id = Link::whereSlug($request->get('slug'))->first()->id;
        return [
            'destination' => 'required',
            'title' => 'required|max:255',
            'slug' => 'required|max:255|unique:links,slug,' . $id,
            'status' => 'required|max:255',
            'published_at' => 'nullable|date',
            'user_id' => 'required',
        ];
    }
}
