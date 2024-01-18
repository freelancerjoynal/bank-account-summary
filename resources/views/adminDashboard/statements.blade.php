@extends('layouts.admin_app')
@section('content')
<div class="container">
    <form method="POST" action="{{route('admin.statements.create')}}">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input name="statementName" type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter statement name">        </div>
        @csrf
        
        <button type="submit" class="btn btn-primary">Save</button>
      </form>

      <br><br><br>

    <table class="table table-responsive">
        <tr>
            <th>Statement</th>
            <th>Action</th>
        </tr>
        @foreach ($statements as $item)
        <tr>
            <td>{{$item->name}}</td>
            <td>
                <a href="{{ route('admin.statements.delete', ['id' => $item->id]) }}">Delete</a>
            </td>
        </tr>
        @endforeach
        
    </table>
</div>
@endsection