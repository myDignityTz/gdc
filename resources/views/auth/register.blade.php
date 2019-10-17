@extends('layouts.app')

@section('content')
<div class="bg-white shadow rounded overflow-hidden">
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <header class="px-6 py-6">
            <h2 class="border-b pb-4 text-xs uppercase tracking-wider">{{ __('Register') }}</h2>
        </header>

        <div class="px-6">
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="name" class="block mb-2">{{ __('Name') }}</label>

                    <input id="name" type="text" class="form-input w-full @error('name') border-red-500 @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
    
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
    
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="email" class="block mb-2">{{ __('Email Address') }}</label>

                    <div class="col-md-6">
                        <input id="email" type="email" class="form-input w-full @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
        
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
            </div>
    
            <div class="flex mb-6 -mx-3">
                <div class="w-1/2 px-3">
                    <label for="password" class="block mb-2">{{ __('Password') }}</label>

                    <div class="col-md-6">
                        <input id="password" type="password" class="form-input w-full @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
        
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>

                <div class="w-1/2 px-3">
                    <div class="mb-6">
                        <label for="password-confirm" class="block mb-2">{{ __('Confirm Password') }}</label>
            
                        <div class="col-md-6">
                            <input id="password-confirm" type="password" class="form-input w-full" name="password_confirmation" required autocomplete="new-password">
                        </div>
                    </div>
                </div>
            </div>
    
            
        </div>

        <footer class="bg-purple-100 py-4 px-6 flex justify-between items-center">
            <button type="submit" class="bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded">
                {{ __('Register') }}
            </button>

            <a class="bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded" href="/login">
                {{ __('Login') }}
            </a>
        </footer>
    </form>
</div>
@endsection
