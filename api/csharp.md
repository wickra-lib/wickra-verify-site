# C#

The wickra-verify core for .NET, over the C ABI via P/Invoke. The native library ships
inside the NuGet package for every supported runtime identifier, so there is
nothing to install alongside it.

```bash
dotnet add package Wickra.Verify
```

The binding is a thin, faithful surface over the same command boundary every other binding drives, so a request built here produces the same canonical bytes it would in Rust, Python or Go.

```csharp
using WickraVerify;

using var handle = new Verifier();
string response = handle.Command("""{"cmd":"version"}""");
Console.WriteLine(response);
```

## More

- [NuGet](https://www.nuget.org/packages/Wickra.Verify)
- [Source & examples](https://github.com/wickra-lib/wickra-verify/tree/main/examples/csharp)
