{
  description = "node env";
  nixConfig.bash-prompt-prefix = "[nix(node)] ";
  inputs = { nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable"; };

  outputs = { self, nixpkgs }:
    let
      pkgs = nixpkgs.legacyPackages.x86_64-linux.pkgs;
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        name = "node env";
        buildInputs = [
          pkgs.nodejs_20
          pkgs.nodePackages."@tailwindcss/language-server"
          pkgs.nodePackages.typescript-language-server
        ];
      };
    };
}
