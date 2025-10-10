import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const PeopleSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pessoas Envolvidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">João da Silva Pereira</p>
                <p className="text-sm text-gray-500">Vendedor (PF)</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">CPF: ***.123.456-**</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>CE</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Construtora Edificar Ltda.</p>
                <p className="text-sm text-gray-500">Comprador (PJ)</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">CNPJ: 12.345.678/0001-99</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PeopleSection;