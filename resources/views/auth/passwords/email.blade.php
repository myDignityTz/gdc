@extends('layouts.app')

@section('content')
<div class="bg-white shadow rounded py-6 px-6">
    <div class="mb-6">
        {{ __('Reset Password') }}
    </div>

    <div class="card-body">
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif

        <form method="POST" action="{{ route('password.email') }}">

            @csrf

            <div class="mb-6">
                <label for="email" class="block mb-2">
                    {{ __('Email Address') }}
                </label>
                <div class="col-md-6">
                    <input id="email" type="email" class="form-input w-full @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <footer>
                <button type="submit" class="bg-blue-500 text-white text-xs uppercase font-semibold tracking-wider px-5 py-3 rounded">
                    {{ __('Send Password Reset Link') }}
                </button>
            </footer>
        </form>
    </div>
</div>
@endsection
